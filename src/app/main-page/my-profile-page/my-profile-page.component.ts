import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface User {
  _id: any;
  id: string;
  active: boolean;
  last_login: Date;
  username: string;
  created: Date;
  user_mail : string;
  roles : Array<string>;
}

@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css']
})
export class MyProfilePageComponent implements OnInit {
  constructor() { }
app = environment.application
// user : any;
// mongo : any;
// collection : any;
user_mail : any;
username : any;
created : any;
last_login : any;
roles : Array<String>

  ngOnInit() {
   const user = this.app.allUsers[sessionStorage.getItem("userId")]
    
  const mongo =user.mongoClient('Cluster0');
  const collection = mongo.db('Data').collection("users");
  collection.find({'id':user.id}).then((value:Array<User>)=>{ 
    this.user_mail = value[0].user_mail
    this.username = value[0].username
    this.created = value[0].created.toLocaleString()
    this.last_login = value[0].last_login.toLocaleString()
    this.roles = value[0].roles
  })


  }

}