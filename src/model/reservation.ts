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
    nrOfGuests: number;
    guestName: string;
    roomName: string;
    isCatering: boolean;
    isInvoice: boolean;
    additionalInformation: string;
}