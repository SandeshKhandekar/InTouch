import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import contacts from '../assets/contacts.json';
import {DataSource} from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  [x: string]: any;

  //dataSource = contacts;
  //displayedColumns: string[] = ['Name', 'Phone'];

  title = 'Contact Manage';
  term;
  Users: any = contacts;
  selectedHero: any;
  isVisible : boolean = false;
  editMode = false;

  public highlightCurrentRow : any;
  ngOnInit () {  }

  onSelect(users: any): void {
    this.selectedHero = users;
  }
  HighlightRow : Number;
  showSave : boolean = false;
  homeContent : boolean = false;
  /*
  deleteRow(x){
    var delBtn = confirm(x.Name + " Do you want to delete ?");
    if ( delBtn == true ) {
      this.Users.splice(x,1);
    }
    this.showSave = false; 
    this.isVisible = false;
  
  }*/
  index:Array<Number> = [1,2,3];
  
  editDomain(){
    this.showSave = true;
    this.isVisible = false;
  }

  saveContact(User1 :any){
    this.Fname = User1.Name;
    this.MobileNumber = User1.Phone;
    this.Notes = User1.Notes;
    this.Email = User1.Email
    console.log(this.Fname);
    this.isVisible = false;
    this.showSave = false;
  }

  

}
