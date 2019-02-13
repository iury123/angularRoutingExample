import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  private crisis: any[] = [
    {id: 1, name: 'Crisis 01', email: 'aluno01@email.com'},
    {id: 2, name: 'Crisis 02', email: 'aluno02@email.com'},
    {id: 3, name: 'Crisis 03', email: 'aluno03@email.com'}
  ];

  constructor() {}


  getCrisis() {
    return this.crisis;
  }

  getCrise(id: number) {
    return this.crisis.find((crise) => crise.id === id);
  }

}
