import {Component, OnInit} from '@angular/core';
import {RestDataSourceService} from '../../services/data-source.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  pricelist: any;

  constructor(private restDataSource: RestDataSourceService) {
  }

  ngOnInit() {
    this.restDataSource.getPriceList().subscribe(pricelist => {
      this.pricelist = pricelist;
    });
  }

}
