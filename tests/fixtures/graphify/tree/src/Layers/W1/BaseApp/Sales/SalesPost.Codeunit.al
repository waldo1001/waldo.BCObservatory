codeunit 80 "Sales-Post"
{
    TableNo = "Sales Header";

    trigger OnRun()
    begin
        PostSalesDoc(Rec);
    end;

    var
        GenJnlPostLine: Codeunit "Gen. Jnl.-Post Line";
        ReleaseDoc: Codeunit "Release Sales Document";
        Unknown: Codeunit "Not In Repo";
        TestHelper: Codeunit "Library - Sales";
        Moved: Codeunit "Moved Setup";

    procedure PostSalesDoc(var SalesHeader: Record "Sales Header")
    begin
        CheckDoc(SalesHeader);
        GenJnlPostLine.RunWithCheck(SalesHeader);
        GenJnlPostLine.RunWithoutCheck(SalesHeader);
        ReleaseDoc.PerformManualRelease(SalesHeader);
        Unknown.DoIt();
        TestHelper.CreateSalesOrder();
        Moved.Setup();
        Codeunit.Run(Codeunit::"Release Sales Document", SalesHeader);
        OnAfterPostSalesDoc(SalesHeader);
    end;

    procedure PostLines()
    begin
        GenJnlPostLine.PostA();
        GenJnlPostLine.PostB();
        GenJnlPostLine.PostC();
        GenJnlPostLine.PostD();
        GenJnlPostLine.PostE();
    end;

    local procedure CheckDoc(var SalesHeader: Record "Sales Header")
    begin
        SalesHeader.TestField("No.");
    end;

    [IntegrationEvent(false, false)]
    local procedure OnAfterPostSalesDoc(var SalesHeader: Record "Sales Header")
    begin
    end;
}
