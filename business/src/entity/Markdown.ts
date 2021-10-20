import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Markdown {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  content: string;
}
