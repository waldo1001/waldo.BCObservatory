namespace Fixture.Sales;
table 18 Customer
{
    fields
    {
        field(1; "No."; Code[20]) { Caption = 'No.'; DataClassification = CustomerContent; }
        field(2; Name; Text[100]) { ObsoleteState = Removed; ObsoleteTag = '25.0'; ObsoleteReason = 'gone'; }
        field(3; "Blocked"; Enum "Customer Blocked") { }
    }
    keys { key(PK; "No.") { Clustered = true; } key(Key2; Name, "No.") { } }
    procedure GetName(Prefix: Text; var Cust: Record Customer temporary): Text[50] begin end;
    [IntegrationEvent(false, false)]
    local procedure OnAfterX(var Rec: Record Customer) begin end;
    [Obsolete('use Y', '26.0')]
    internal procedure OldOne() begin end;
}
tableextension 11300 "BE Customer" extends Customer
{
    fields { field(11300; "Enterprise No."; Text[50]) { } }
}
}

codeunit 80 "Sales-Post"
{
    Permissions = TableData "Sales Header" = rimd;
    TableNo = "Sales Header";
    trigger OnRun() begin end;
    /// <summary>Posts it.</summary>
    procedure Post(var SalesHeader: Record "Sales Header"): Boolean begin end;
    [EventSubscriber(ObjectType::Table, Database::Customer, 'OnAfterInsertEvent', '', false, false)]
    local procedure OnCust(var Rec: Record Customer) begin end;
    [BusinessEvent(false)]
    procedure OnBiz() begin end;
}
enum 18 "Customer Blocked"
{
    Extensible = true;
    value(0; " ") { Caption = ' '; }
    value(1; Ship) { ObsoleteState = Pending; ObsoleteTag = '26.0'; }
}
page 21 "Customer Card"
{
    PageType = Card; SourceTable = Customer;
    layout { area(Content) { group(General) { field("No."; Rec."No.") { ToolTip = 'x'; } } } }
    actions { area(Processing) { action(Post) { trigger OnAction() begin end; } } }
}
interface "I X" { procedure DoIt(): Integer; }
pageextension 11300 "BE Card" extends "Customer Card" { }
report 6 "Trial Balance" { DefaultLayout = RDLC; }
query 100 Q { elements { dataitem(C; Customer) { column(No; "No.") { } } } }
permissionset 1 "D365 BASIC" { Assignable = true; Permissions = tabledata Customer = R; }
enumextension 11300 "BE Blocked" extends "Customer Blocked" { value(11300; X) { } }
xmlport 1 X { }
controladdin Foo { Scripts = 'a.js'; }
profile ACCOUNTANT { RoleCenter = "Accountant RC"; }
reportextension 50 R extends "Trial Balance" { }
permissionsetextension 50 P extends "D365 BASIC" { }
entitlement E { Type = Implicit; }
