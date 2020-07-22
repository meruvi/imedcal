import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent implements OnInit {

    public slides = [
        {
          src: '/assets/img/banner/banner-01.jpg'
        },
        {
          src: '/assets/img/banner/banner-02.jpg'
        },
        {
          src: '/assets/img/banner/banner-03.jpg'
        }
    ];

  ngOnInit(): void {
    }

}
