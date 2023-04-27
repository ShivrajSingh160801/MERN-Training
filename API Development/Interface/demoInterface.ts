// export interface RootObject {
//     _id: string;
//     InvestmentType: number;
//     CompanyName: string;
//     RepName: string;
//     RepId: string;
//     ProductServices: ProductServices;
//     Class: ProductServices;
//     Program: ProductServices;
//     Description: string;
//     QBOEntityId: string;
//     QBOEntityNo: string;
//     Amount: number;
//     ProcessingFee: number;
//     BrooklynInvestmentStatus: number;
//     PaybevInvestmentStatus: number;
//     IsPaybevConfirmed: boolean;
//     IsNonALC: boolean;
//     SiteId: string;
//     SiteName: string;
//     Processfee: string;
//     Stage: number;
//     CustomerDetails: CustomerDetails;
//     InvestmentDetails: InvestmentDetails;
//     Comment?: any;
//     CreatedBy: string;
//     CreatedById: string;
//     ModifyBy: string;
//     ApproverBy: string;
//     ApproverId: string;
//     IsLinkedEstimate: boolean;
//     CancelReason?: any;
//     TransactionsNo?: any;
//     QBOInvoiceLink?: any;
//   }
  
//   export interface InvestmentDetails {
//     PaybevInvestment: PaybevInvestment;
//     QuickBookInvestment: QuickBookInvestment;
//   }
  
//   export interface QuickBookInvestment {
//     UserId: string;
//     UserName: string;
//     ProductServices: ProductServices;
//     Class: ProductServices;
//     Description: string;
//     Memo?: any;
//     Amount: number;
//     ProcessingFee: number;
//     QBOEntityId: string;
//     QBOEntityNo: string;
//     PaymentId?: any;
//   }
  
//   export interface PaybevInvestment {
//     ProductServices: ProductServices;
//     Class: ProductServices;
//     CompanyName: string;
//     RepName: string;
//     RepId: string;
//     Memo?: any;
//     Amount: number;
//     ProcessingFee: number;
//     Fee: string;
//     IsEstimate: boolean;
//     Description: string;
//     LinkedEstimateNo?: any;
//     LinkedEstimateId?: any;
//     LinkedInvoiceNo: string;
//     LinkedInvoiceId: string;
//   }
  
//   export interface CustomerDetails {
//     IsMapWithExisting: boolean;
//     PayBevCustomerDetails: PayBevCustomerDetails;
//     QuickBookCustomerDetails: QuickBookCustomerDetails;
//   }
  
//   export interface QuickBookCustomerDetails {
//     _id?: any;
//     QBOCustomerId: string;
//     QBOCustomerNo?: any;
//     Name: string;
//     CompanyName: string;
//     StreetAddress1: string;
//     StreetAddress2: string;
//     City: string;
//     State: string;
//     ZIPCode: string;
//     Country?: any;
//     IsAddLine: boolean;
//     ParentRefId: string;
//     Email: string;
//     PhoneNumber: string;
//     MobileNumber: string;
//     Terms: Terms;
//     PaymentMethod: Terms;
//   }
  
//  export interface PayBevCustomerDetails {
//     _id: string;
//     QBOCustomerId: string;
//     QBOCustomerNo?: any;
//     Name: string;
//     CompanyName: string;
//     StreetAddress1: string;
//     StreetAddress2: string;
//     City: string;
//     State: string;
//     ZIPCode: string;
//     Country: string;
//     IsAddLine: boolean;
//     ParentRefId: string;
//     Email: string;
//     PhoneNumber: string;
//     MobileNumber: string;
//     Terms: Terms;
//     PaymentMethod: Terms;
//   }
  
// export interface Terms {
//     _id?: any;
//     Name?: any;
//   }
  
//  export interface ProductServices {
//     _id: string;
//     Name: string;
//   }
  
export interface InvestmentRoot {
    investments: Root[];
  }

export interface Root {
    _id: string
    InvestmentType: string
    CompanyName: string
    RepName: string
    RepId: string
    ProductServices: ProductServices
    Class: Class
    Program: Program
    Description: string
    QBOEntityId: string
    QBOEntityNo: string
    Amount: number
    ProcessingFee: number
    BrooklynInvestmentStatus: number
    PaybevInvestmentStatus: number
    IsPaybevConfirmed: boolean
    IsNonALC: boolean
    SiteId: string
    SiteName: string
    Processfee: string
    Stage: number
    CustomerDetails: CustomerDetails
    InvestmentDetails: InvestmentDetails
    Comment: any
    CreatedBy: string
    CreatedById: string
    ModifyBy: string
    ApproverBy: string
    ApproverId: string
    IsLinkedEstimate: boolean
    CancelReason: any
    TransactionsNo: any
    QBOInvoiceLink: any
}

export interface ProductServices {
    _id: string
    Name: string
}

export interface Class {
    _id: string
    Name: string
}

export interface Program {
    _id: string
    Name: string
}

export interface CustomerDetails {
    IsMapWithExisting: boolean
    PayBevCustomerDetails: PayBevCustomerDetails
    QuickBookCustomerDetails: QuickBookCustomerDetails
}

export interface PayBevCustomerDetails {
    _id: string
    QBOCustomerId: string
    QBOCustomerNo: any
    Name: string
    CompanyName: string
    StreetAddress1: string
    StreetAddress2: string
    City: string
    State: string
    ZIPCode: string
    Country: string
    IsAddLine: boolean
    ParentRefId: string
    Email: string
    PhoneNumber: string
    MobileNumber: string
    Terms: Terms
    PaymentMethod: PaymentMethod
}

export interface Terms {
    _id: any
    Name: any
}

export interface PaymentMethod {
    _id: any
    Name: any
}

export interface QuickBookCustomerDetails {
    _id: any
    QBOCustomerId: string
    QBOCustomerNo: any
    Name: string
    CompanyName: string
    StreetAddress1: string
    StreetAddress2: string
    City: string
    State: string
    ZIPCode: string
    Country: any
    IsAddLine: boolean
    ParentRefId: string
    Email: string
    PhoneNumber: string
    MobileNumber: string
    Terms: Terms  
    PaymentMethod: PaymentMethod
}

export interface Terms {
    _id: any
    Name: any
}

export interface PaymentMethod {
    _id: any
    Name: any
}

export interface InvestmentDetails {
    PaybevInvestment: PaybevInvestment
    QuickBookInvestment: QuickBookInvestment
}

export interface PaybevInvestment {
    ProductServices: ProductServices
    Class: Class
    CompanyName: string
    RepName: string
    RepId: string
    Memo: any
    Amount: number
    ProcessingFee: number
    Fee: string
    IsEstimate: boolean
    Description: string
    LinkedEstimateNo: any
    LinkedEstimateId: any
    LinkedInvoiceNo: string
    LinkedInvoiceId: string
}

export interface ProductServices {
    _id: string
    Name: string
}

export interface Class {
    _id: string
    Name: string
}

export interface QuickBookInvestment {
    UserId: string
    UserName: string
    ProductServices: ProductServices
    Class: Class
    Description: string
    Memo: any
    Amount: number
    ProcessingFee: number
    QBOEntityId: string
    QBOEntityNo: string
    PaymentId: any
}

export interface ProductServices {
    _id: string
    Name: string
}

export interface Class {
    _id: string
    Name: string
}
