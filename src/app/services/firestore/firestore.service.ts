import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore:AngularFirestore
  ) { }

  //Obtiene todos los servicios
  public getServices():Observable<any>{
    return this.firestore.collection('service').snapshotChanges();
  }
  //crear
  public createService(data:any) {
    return this.firestore.collection('service').add(data);
  }
  //Actualiza
  public updateService(documentId: string, data: any) {
    return this.firestore.collection('service').doc(documentId).set(data);
  }
  //get
  public getService(documentId: string) {
    return this.firestore.collection('cats').doc(documentId).snapshotChanges();
  }
  // public deleteService(documentId:string) {
  //   this.firestore.doc('service/' + documentId).delete();
  // }
}
