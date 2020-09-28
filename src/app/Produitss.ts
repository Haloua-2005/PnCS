export class Produit {
  Title:string
  Description:string
  Details:string
  Mark:string
  Path:string

  constructor(
    title:string,
    description:string,
    details:string,
    mark:string,
    path:string
  ){
    this.Title= title
    this.Description = description
    this.Details = details
    this.Mark = mark
    this.Path = path
  }
}
