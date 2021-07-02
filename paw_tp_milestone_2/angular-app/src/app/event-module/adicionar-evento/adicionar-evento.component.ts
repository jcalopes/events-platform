import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import { evento } from 'src/app/models/evento';
import { local } from 'src/app/models/local';
import { RestEventoService } from 'src/app/services/Eventos/rest-evento.service';
import { RestLocaisService } from 'src/app/services/Locais/rest-locais.service';
import { CustomErrorStateMatcher } from 'src/app/shared/custom-state-matcher';

@Component({
  selector: 'app-adicionar-evento',
  templateUrl: './adicionar-evento.component.html',
  styleUrls: ['./adicionar-evento.component.css']
})
export class AdicionarEventoComponent implements OnInit {
  @Input() evento: evento = new evento("", "", "", "", "", "", "", false, false, "",0);
  locais: local[] = [];
  fileUpload:File=new File([],"");
  fileName = '';
  message = '';
  form: FormGroup;
  customErrorStateMatcher = new CustomErrorStateMatcher();

  constructor(private restEvents: RestEventoService, private restLocais: RestLocaisService, 
    private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      destaque: ['', Validators.required],
      visivel: ['', Validators.required],
      categoria: ['', Validators.required],
      local: ['', Validators.required],
      preco: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.restLocais.mostrarLocais().subscribe((resLocais) => {
      this.locais = resLocais;
    }, (error) => {
      alert("Não foi possivel carregar locais de eventos");
    });
  }

  radioChangeDestaque(event: MatRadioChange) {
    this.evento.destaque = (event.value == 'sim');
  }

  radioChangeVisivel(event: MatRadioChange) {
    this.evento.visivel = (event.value == 'sim');
  }

  radioChangeCategoria(event: MatSelectChange) {
    this.evento.categoria = event.value;
  }

  radioChangeLocal(event: MatSelectChange) {
    this.evento.local = event.value;
  }

  addEvent() {
    if (new Date(this.evento.dataInicio) < new Date(Date.now()) ||
      new Date(this.evento.dataFim) < new Date(Date.now()) ||
      new Date(this.evento.dataInicio) > new Date(this.evento.dataFim)) {
      alert("Datas não são válidas.Verifique que a data do inicio é posterior à data de hoje e anterior à data do fim");
    }

    this.evento.promotor = localStorage.getItem('username')!;
    if (!this.form.valid) {
      alert("Todos os campos são de preenchimento obrigatório");
    }
    else if(this.fileUpload.name != ""){
      console.log("fileUploaded");
        this.restEvents.uploadFile(this.fileUpload,"newimage").subscribe((result:any) => {
        this.fileName = '';
        this.message = '';
   });
   this.restEvents.criarEvento(this.evento).subscribe((resEvent) => {
    alert("Evento adicionado");
    setTimeout(() => location.reload(), 1000);
  }, (error) => {
    alert("Erro no registo do evento")
  });
    }
    else{
      alert("Post Promocional é obrigatório.");
    }
  }

    onFileSelected(event:any) {
    this.fileUpload = event.target.files[0];
    this.fileName = this.fileUpload.name;
  }

}
