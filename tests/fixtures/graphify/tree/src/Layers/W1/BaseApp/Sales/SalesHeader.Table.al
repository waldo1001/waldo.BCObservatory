table 36 "Sales Header"
{
    fields
    {
        field(1; "No."; Code[20]) { }
        field(2; "Sell-to Customer No."; Code[20]) { TableRelation = Customer; }
    }
}
