import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Placar de Times';
  nomeDoTime1: any = '';
  nomeDoTime2: any = '';
  step = 1;
  pontosTime1: number = 0;
  pontosTime2: number = 0;
  nomeTimeVencedor = '';
  pontosTimeVencedor: any = '';

  ngOnInit() {}

  iniciar() {
    console.log('Time 1', this.nomeDoTime1);
    console.log('Time 2', this.nomeDoTime2);
    this.step = 2;
  }

  adicionarPontosTime1() {
    this.pontosTime1++;
  }

  removerPontosTime1() {
      this.pontosTime1--
    }

  adicionarPontosTime2() {
    this.pontosTime2++;
  }

  removerPontosTime2() {
    this.pontosTime2--;
  }

  zerarPontuacao() {
    this.pontosTime1 = 0;
    this.pontosTime2 = 0;
  }

  paginaInicial() {
    this.step = 1;
    this.nomeDoTime1 = '';
    this.nomeDoTime2 = '';
    this.pontosTime1 = 0;
    this.pontosTime2 = 0;
    this.nomeTimeVencedor = ''
  }

  finalizarPartida() {
    this.step = 3;
    if (this.pontosTime1 > this.pontosTime2) {
      // console.log('Time', this.nomeDoTime1, 'venceu!', this.pontosTime1, ' pontos');
      this.nomeTimeVencedor = this.nomeDoTime1;
      this.pontosTimeVencedor = this.pontosTime1;
    } else if (this.pontosTime1 < this.pontosTime2) {
      this.nomeTimeVencedor = this.nomeDoTime2;
      this.pontosTimeVencedor = this.pontosTime2;
    }
  }
}
