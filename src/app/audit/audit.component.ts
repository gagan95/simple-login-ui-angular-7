import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from '@/_services';
import { User } from '@/_models';

@Component({ templateUrl: 'audit.component.html' })

export class AuditComponent implements OnInit {
    p: number = 1;
    users: User[] = [];
   

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
       
    }

    ngOnInit() {
       
        this.loadAllUsers();
    }
    private loadAllUsers() {
        this.userService.getAudit().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

    ngOnDestroy(): void {
       
      }
}