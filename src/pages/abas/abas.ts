import { Component } from '@angular/core';
import { AjustesPage } from "../ajustes/ajustes";
import { NotificacoesPage } from "../notificacoes/notificacoes";
import { LupaPage } from "../lupa/lupa";
import { ConversasPage } from "../conversas/conversas";
import { FavoritosPage } from "../favoritos/favoritos";


/**
 * Generated class for the Abas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-abas',
  templateUrl: 'abas.html',
})
export class AbasPage {

  ajustesPage = AjustesPage;
  notificacoesPage = NotificacoesPage;
  lupaPage = LupaPage;
  conversasPage = ConversasPage;
  favoritosPage = FavoritosPage;


}
