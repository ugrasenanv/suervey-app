import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { User } from "../model/user";
import { UsersActions } from "../actions/users.actions";
import { select } from "@angular-redux/store";
import { Observable } from "rxjs";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit  {
  
  displayColumns = ['id', 'firstName', 'lastName', 'email', 'gender', 'phoneNumber','comments','rating', 'date'];

   dataSource: MatTableDataSource<UserData>;
   surveyDataSource : MatTableDataSource<User>;
  users: User[] = [];
  @select("users") public users$: Observable<User>

   @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 constructor(
   public actions: UsersActions
   ){
    // Create 100 users
    const users: UserData[] = [];
  
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    // this.surveyDataSource = new MatTableDataSource(users$);
  }
  ngOnInit() {}

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   this.surveyDataSource.paginator = this.paginator;
   this.surveyDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
     this.surveyDataSource.filter = filterValue;
  }
}


export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phNumber: number;
  comments: string;
  rating: number;
  date: string;
}
