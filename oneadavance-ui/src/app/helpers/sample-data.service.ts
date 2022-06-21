import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  todayDate = new Date();

  roles: Roles[] = [
    {
      id: 1,
      name: 'Admin',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 2,
      name: 'Operators',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 3,
      name: 'Sales',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 4,
      name: 'Sales',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 5,
      name: 'Sales',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 6,
      name: 'Sales',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 7,
      name: 'Sales',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    }
  ];

  privileges: Roles[] = [
    {
      id: 1,
      name: 'Dashboard',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 2,
      name: 'Coupons',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 3,
      name: 'Vendors',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 4,
      name: 'Customers',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 5,
      name: 'Reports',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 6,
      name: 'Reports',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    },
    {
      id: 7,
      name: 'Reports',
      description: '',
      createdAt: this.todayDate,
      updatedAt: this.todayDate,
      createdBy: 'Admin',
      updatedBy: 'Admin',
    }
  ];

  subscriptions : Subscription[] = [
    {
      id: 1,
      name: 'Dashboard',
      description: '',
      cost: '23',
      period: '334',
      welcomeBonus: '45345',
      convertRatio:'3'
    },
    {
      id: 1,
      name: 'Dashboard',
      description: '',
      cost: '23',
      period: '334',
      welcomeBonus: '45345',
      convertRatio:'3'
    },
    {
      id: 1,
      name: 'Dashboard',
      description: '',
      cost: '23',
      period: '334',
      welcomeBonus: '45345',
      convertRatio:'3'
    },
    {
      id: 1,
      name: 'Dashboard',
      description: '',
      cost: '23',
      period: '334',
      welcomeBonus: '45345',
      convertRatio:'3'
    },
    {
      id: 1,
      name: 'Dashboard',
      description: '',
      cost: '23',
      period: '334',
      welcomeBonus: '45345',
      convertRatio:'3'
    },
    {
      id: 1,
      name: 'Dashboard',
      description: '',
      cost: '23',
      period: '334',
      welcomeBonus: '45345',
      convertRatio:'3'
    }
   
  ];

  constructor() { }
}

export class Roles {
  id;
  name;
  description;
  createdAt;
  updatedAt;
  createdBy;
  updatedBy;
}

export class Subscription {
  id;
      name;
      description;
      cost;
      period;
      welcomeBonus;
      convertRatio;
}