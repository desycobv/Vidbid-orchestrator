const demoDao = require('../dao/demoDao');

class DemoService {
  async createDemo(body) {
    const { insertId } = await demoDao.createObject(body.name);
    await this.createAllSubObjectOfDemo(insertId, body.subObjects);
    return { insertId };
  }

  async getAllDemos() {
    const allObjects = await demoDao.getAllObjects()
    const result = []
    for( const obj of allObjects){
      const allSubObjects = await this.getAllSubObjectOfDemo(obj.id);
      result.push({
        ...obj,
        subObjects: allSubObjects
      });
    }
    return result;
  }


  async getDemo(id) {
    const object = await demoDao.getObject(id)
    if(!object) return "Object nor found";
    const subObjects = await this.getAllSubObjectOfDemo(id)
    return {
      ...object,
      subObjects
    }
  }

  async updateDemo(id, body) {
    await demoDao.updateObject(id, body.name)
    const subObjectsList = await demoDao.getAllSubObjectsByObjectId(id);
    for(const subObj of subObjectsList){
      await demoDao.deleteSubObject(subObj.id)
    }
    await this.createAllSubObjectOfDemo(id, body.subObjects);
  }

  async patchDemo(id, body) {
    await demoDao.updateObject(id, body.name)
  }

  async deleteDemo(id) {
    const subObjectsList = await demoDao.getAllSubObjectsByObjectId(id);
    for(const subObj of subObjectsList){
      await demoDao.deleteSubObject(subObj.id)
    }
    await demoDao.deleteObject(id)
  }


  async getAllSubObjectOfDemo(objectId){
    const subObjects = await demoDao.getAllSubObjectsByObjectId(objectId)
    return subObjects.map(obj => {
      return {
        name: obj.name,
        title: obj.title
      }
    })
  }

  async createAllSubObjectOfDemo(objectId, subObjectList){
    for( const subObject of subObjectList) {
      await demoDao.createSubObject(objectId, subObject.name, subObject.title)
    }
  }
}

module.exports = new DemoService();