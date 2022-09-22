import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'firebase.conf';
import {
  getFirestore,
  collection,
  addDoc,
  DocumentData,
  CollectionReference,
} from 'firebase/firestore';
import { Miembro } from 'src/app/interfaces/miembro';
import { Voluntario } from 'src/app/interfaces/voluntario';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private app = initializeApp(firebaseConfig);
  private db = getFirestore(this.app);

  private createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(this.db, collectionName) as CollectionReference<T>;
  };

  async sendform<T>(data: T, path: 'miembro' | 'voluntario') {
    try {
      const form = await addDoc(this.createCollection<T>(path), data);
      console.log('Document written with ID: ', form.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  constructor() {}
}
