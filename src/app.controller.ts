import { Controller, Get, Render, Query, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  @Get('hatterszin')
  @Render('hatter')
  hatterszin(@Query('bgColor') bgColor: string = 'blue'){
      return {
        bgColor
      }
  }


  #jegkremek =  [
    { nev:'Eperfagylalt', ar:450},
    { nev:'Vanília', ar:500},
    { nev:'Csokoládé', ar:550 }
  ]

  @Get('jegkrem')
  @Render('jegkremlista')
  jegkremLista(){
    return{
      jegkremek: this.#jegkremek
    }
  }



  @Get('jegkrem/:id')
  @Render('jegkrem')
  jegkrem(@Param('id') id: string){

    return this.#jegkremek[id]

  }
}
