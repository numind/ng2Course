export class Project {
  Objects: Array<Object>;
  Name: string;
  Description: string;
  Class: string;

}

export class Object {
    Title: string;
    Description: string;
    List: Array<ListItem>;
}

export class ListItem {
    Title: string;
}
