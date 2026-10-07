codeunit 7005 "Sales Ambiguous Caller"
{
    procedure Guess()
    var
        GenJnlPostLine: Codeunit "Gen. Jnl.-Post Line";
    begin
        GenJnlPostLine.PostB();
    end;
}
