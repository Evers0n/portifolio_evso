import { Component, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.Interface';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
      {
        src: 'assets/img/projects/github.svg',
      alt: 'github',
      title: 'Github',
      width: '100px',
      height: '51px',
      description: '<p>Acesse meus projetos no Github</p>',
      links: [
        {
          name: 'GitHub',
          href: 'https://github.com/Evers0n',
        },
      ],
    }    
  ]);
}
