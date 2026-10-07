codeunit 414 "Release Sales Document"
{
    TableNo = "Sales Header";
    trigger OnRun()
    begin
        PerformManualRelease(Rec);
    end;

    procedure PerformManualRelease(var SalesHeader: Record "Sales Header")
    var
        Post: Codeunit "Sales-Post";
    begin
        Post.PostSalesDoc(SalesHeader);
    end;
}
