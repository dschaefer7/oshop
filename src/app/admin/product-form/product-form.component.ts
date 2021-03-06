import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../category.service';
import {ProductService} from '../../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService,
              private productService: ProductService) {
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).take(1).subscribe(p => {
        this.product = p;
        // console.log(this.product);
      });
    }
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, this.product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['admin/products']);
  }

  remove() {
    if (confirm('Delete???')) {
      this.productService.delete(this.id);
      this.router.navigate(['admin/products']);
    }
  }


  ngOnInit() {
  }

}
