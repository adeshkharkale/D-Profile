import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SProfileService } from '../s-profile.service';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {

  somecondition = false;
  closeModalDialog() {
    this.somecondition = false;
  }

  constructor(private router: Router, private route: ActivatedRoute, public objSProfileService: SProfileService,
    private titleService: Title,
    private meta: Meta
  ) {
    this.route.queryParams.subscribe(params => {
      let mobile = params['user'];
      console.log(mobile);
      if (mobile != undefined || mobile != null) {

        this.objSProfileService.getProfile(mobile).toPromise()
          .then(res => {
            this.objSProfileService.pCreateProfile = Object.assign(res);
            localStorage.setItem('requested_profile_id', this.objSProfileService.pCreateProfile.regId.toString());

            // try{
            //   this.router.events.pipe(
            //     filter(event => event instanceof NavigationEnd),
            //   ).subscribe(() => {
            //     const rt = this.getChild(this.route);
            //     rt.data.subscribe((data: any) => {
            //       console.log(data);
            //       this.titleService.setTitle(this.objSProfileService.pCreateProfile.name)
            //     });
            //   });
            // }
            // catch{}

            this.objSProfileService.bindProfile(this.objSProfileService.pCreateProfile.regId)
          },
            err => {
              window.location.href = "http://www.despa.co.in";
            });
      }
    });
  }

  ngOnInit(): void {


    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    // ).subscribe(() => {
    //   var rt = this.getChild(this.route)

    //   rt.data.subscribe((data:any)  => {
    //     console.log(data);
    //     this.titleService.setTitle(data.title)
    //     this.meta.updateTag({ name: 'description', content: "DESPA DEsc New" });
    //   })
    // })
  }

  getChild(route: ActivatedRoute): any {
    if (route.firstChild) {
      return this.getChild(route.firstChild);
    } else {
      return route;
    }
  }
}
