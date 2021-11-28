import { ComponentType } from "react";

export interface UserTrackerType {
    id?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
}
export interface BaseType {
    id?: string;
    createdById?: string;
    createdBy?: UserTrackerType;
    createdAt?: Date;
    updatedById?: string;
    updatedBy?: UserTrackerType;
    updatedAt?: Date;
}

export interface Route {
    name: string,
    path?: string;
    to: string,
    component: ComponentType;
    isMenuItem?: boolean;
}

export interface CustomThemeType {
    mode?: 'light' | 'dark';
    primaryColor?: string;
    secondaryColor?: string;
}

export interface ActionType {
    type: string;
    payload?: any;
}

export interface ResponseType {
    data?: any;
    metadata?: any;
}

export interface GetParamsType {
    page?: number;
    pageSize?: number;
}

export interface MetadataType {
    page?: number;
    pageSize?: number;
    totalPages: number;
    totalResults: number;
}

export interface FieldType {
    name: string;
    label?: string;
    fieldType: 'text' | 'autocomplete' | 'date' | 'select';
    options?: any[];
}

export interface SelectOptionType {
    value: any;
    label: string;
}