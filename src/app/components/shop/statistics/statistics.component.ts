import { Component, OnInit } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';
import { WebResult } from 'src/app/models/WebResult';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SearchesForShop } from 'src/app/models/SearchesForShop';
import { ForStatics } from 'src/app/models/for-statics';
declare var require: any;
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  searcehsForShop: SearchesForShop;
  rearange: ForStatics[] = [];
  counter: number = 0;

  constructor(private service: ShopsService, private toastr: ToastrService) {

  }



  ngOnInit() {
    this.service.getSearchesForShop().subscribe((res: WebResult) => {
      if (res.Status == true) {
        this.searcehsForShop = res.Value;
        //סופרים כמה הכל ביחד, כדי לדעת את האחוזים
        for (let num of this.searcehsForShop.numbersCategories) {
          this.counter += num;
        }
        for (let i = 0; i < this.searcehsForShop.namesCategories.length; i++) {
          let one = new ForStatics;
          one.name = this.searcehsForShop.namesCategories[i];
          one.y = this.searcehsForShop.numbersCategories[i] * (100 / this.counter);
          this.rearange.push(one);
        }
        var Highcharts = require('highcharts');
        Highcharts.chart('container', {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: 'הקטגוריות הנמכרות בחנותך'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true
            }
          },
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: this.rearange
          }]
        });

      }
      else {
        this.toastr.error(res.Message);
      }
    });

  }


}
