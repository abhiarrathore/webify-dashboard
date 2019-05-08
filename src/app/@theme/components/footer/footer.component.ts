import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://github.com/webyteofficial" target="_blank">Webyte</a></b></span>
    <div class="socials">
      <a href="https://github.com/webyteofficial" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.instagram.com/webyteofficial/" target="_blank" class="ion ion-social-instagram"></a>
      <a href="https://twitter.com/webyteofficial" target="_blank" class="ion ion-social-twitter"></a>
    </div>
  `,
})
export class FooterComponent {
}
