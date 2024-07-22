import { Component, signal } from '@angular/core';

//interface
import { IKnowledge } from '../../interfaces/IKnowledge.Interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Conhecimento sobre html 5',
    }, 

    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Conhecimento sobre CSS',
    }, 

    {
      src: 'assets/icons/knowledge/csharp.svg',
      alt: 'Conhecimento sobre csharp',
    }, 

    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Conhecimento sobre javascript',
    }, 

    {
      src: 'assets/icons/knowledge/postgresql.svg',
      alt: 'Conhecimento sobre PostgreSQL',
    }, 

    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Conhecimento sobre Angular',
    }, 

    {
      src: 'assets/icons/knowledge/bootstrap.svg',
      alt: 'Conhecimento sobre Bootstrap',
    }, 

    {
      src: 'assets/icons/knowledge/powerbi.svg',
      alt: 'Conhecimento sobre PowerBI',
    },

  ]);
}
