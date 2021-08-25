import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  log(text: string | number) {
    console.log(`Log: ${text}`);
  }
}
