import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';




export interface Analysis{
  _id: any;
  type: string;
  active: boolean;
  name: string;
  validity: any;
  users: any;
  fields: any;
}

@Component({
  selector: 'app-answer-page',
  templateUrl: './answer-page.component.html',
  styleUrls: ['./answer-page.component.css']
})
export class AnswerPageComponent implements OnInit {
  name2 = 'Angular';  
    

  app = environment.application
  user : any;
  mongo : any;
  collection : any;
  
  analysis:Analysis[];


sortedData: Analysis[];

constructor(public router: Router) {
  this.user = this.app.allUsers[sessionStorage.getItem("userId")]
    
  this.mongo =this.user.mongoClient('Cluster0');
  this.collection = this.mongo.db('Data').collection("Analyses");
  this.collection.find({"active":true}).then((value)=>{
       //console.log(value)
       this.analysis = value
       //console.log(this.analysis)
  this.sortedData = this.analysis.slice();
    })

    
}



sortData(sort: Sort) {
  
  const data = this.analysis.slice();
  if (!sort.active || sort.direction === '') {
    this.sortedData = data;
    return;
  }

  this.sortedData = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'name':
        return compare(a.name, b.name, isAsc);
      case 'active':
        return compare(a.active, b.active, isAsc);
      case 'type':
        return compare(a.type, b.type, isAsc);
      // case 'carbs':
      //   return compare(a.carbs, b.carbs, isAsc);
      // case 'protein':
      //   return compare(a.protein, b.protein, isAsc);
      default:
        return 0;
    }
  });
}
  ngOnInit() {
    try {
    
    
  } catch(err) {
    console.error("Echec",err)

  }
  }

}

function compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
