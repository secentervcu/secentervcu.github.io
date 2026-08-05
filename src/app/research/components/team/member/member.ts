import { Component, input, InputSignal } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member',
    imports: [
        FaIconComponent
    ],
  templateUrl: './member.html',
  styleUrl: './member.sass'
})
export class Member {
  protected readonly faXTwitter = faXTwitter;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faGlobe = faGlobe;
  protected readonly faLinkedin = faLinkedin;

  readonly name: InputSignal<string> = input.required<string>();
  readonly picture: InputSignal<string> = input.required<string>();
  readonly title: InputSignal<string> = input.required<string>();
  readonly advisor: InputSignal<string | undefined> = input<string>();
  readonly currentJob: InputSignal<string | undefined> = input<string>();
  readonly email: InputSignal<string | undefined> = input<string>();
  readonly website: InputSignal<string | undefined> = input<string>();
  readonly twitter: InputSignal<string | undefined> = input<string>();
  readonly linkedin: InputSignal<string | undefined> = input<string>();
}
