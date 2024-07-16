import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interfaces/IExperiences.Interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Web Designer',
        p: 'Autonomo | Dezembro 2023 - Atual',
      },
      text: '<p>Desde dezembro de 2023, atuo como desenvolvedor web autônomo, focado na criação de sites e desenvolvimento de APIs RESTFULL</p>',
    },
    
    {
       summary: {
        strong: 'Estagiário',
        p: 'Waldir Lima Editora (CCLS) | Abril 2023 - Dezembro 2023',
      },
      text: '<p>No intervalo entre abril e dezembro de 2023, atuei como estagiário e tinha como principais responsabilidades realizar a manutenção dos sites internos e externos do CCAA, além de desenvolvimento de APIs RESTFULL na plataforma .NET</p>',
    },

    {
      summary: {
        strong: 'Estagiário',
        p: 'BTG Pactual | Janeiro 2022 - Outubro 2022',
      },
      text: '<p>Estagiário em Desenvolvimento de Software com experiência em .NET, Power BI, PostgreSQL, Azure Test Plans e Xunit, com conhecimento em metodologias ágeis (SCRUM), pronto para contribuir com soluções tecnológicas e análises de dados.</p>',
    },

    
    {
      summary: {
        strong: 'Analista de Qualidade',
        p: 'Mobato | Novembro 2021 - Janeiro 2022',
      },
      text: '<p>Atuei como analista de qualidade para a Mobato e tive minha primeira experiência prática no mercado de TI. Apesar do curto período (tive de sair para estagiar por conta da faculdade) pude me desenvolver tanto no nível técnico quanto na parte social.</p>',
    }
  
  ]);

}
