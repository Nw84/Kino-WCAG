export default class reviews {
    constructor (data) {
      this.author = data.attributes.author; 
      this.id = data.id; 
      this.rating = data.attributes.rating; 
      this.comment = data.attributes.comment;
    }
}