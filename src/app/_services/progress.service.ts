import { Injectable } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

constructor(private ngProgress: NgProgress) { }

start() {
  this.ngProgress.start();
}

complete() {
  this.ngProgress.complete();
}

getProgress() {
  return this.ngProgress;
}

}
