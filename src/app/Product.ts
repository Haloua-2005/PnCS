export class Produit {
  public Title:string
  public Description:string
  public Details:string
  public Mark:string
  public Path:string
  constructor(
    title:string,
    description:string,
    details:string,
    mark:string,
    path:string
  ){
    this.Title = title
    this.Description = description
    this.Details = details
    this.Mark = mark
    this.Path = path
  }
}
