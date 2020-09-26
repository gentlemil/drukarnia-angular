export interface PersonalInformationDto {
    familyName: string;
    givenName: string;
    email: string;
    phoneNumber: string;
}

export interface ReservationDetailsDto {
    personalInformation: PersonalInformationDto[];
    reservationTitle: string;
    reservationDate: Date;
    nrOfPeople: number;
    roomName: string;
    isCatering: boolean;
    isInvoice: boolean;
    additionalInformation: string;
}