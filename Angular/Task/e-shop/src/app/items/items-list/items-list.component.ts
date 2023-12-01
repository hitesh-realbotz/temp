import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit, OnDestroy {

  items: Item[];
  subscription: Subscription;

  constructor(private itemService: ItemsService,
    private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.subscription = this.itemService.itemChanged.subscribe(
      (Items: Item[]) => {
        this.items = Items;
      }
    )
    this.items = this.itemService.getItems();

  }

  onNewItem() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}