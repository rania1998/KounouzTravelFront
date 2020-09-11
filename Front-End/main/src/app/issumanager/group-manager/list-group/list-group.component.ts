import { Component, OnInit } from '@angular/core';
import { Group } from '../../issueManagerModels/Group';
import { GroupService } from '../../issueManagerServices/GroupService';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {


  groups : Group[] ; 

  constructor(private groupService : GroupService) { }

  ngOnInit() {

    this.groupService.getAllGroups().subscribe( data => {
      this.groups = data;
    });
  }

  deleteGroup(group : Group){

    this.groupService.deleteGroupe(group).subscribe( res => {

      this.groups.splice(this.groups.indexOf(group),1)
    }
    );

  }

  updateGroup(input){

    console.log(input);
    
      }

  
}
