codeunit 7004 "Sales Mismatch"
{
    procedure M()
    var
        GenJnlPostLine: Codeunit "Gen. Jnl.-Post Line";
    begin
        GenJnlPostLine.PostA();
    end;
}
