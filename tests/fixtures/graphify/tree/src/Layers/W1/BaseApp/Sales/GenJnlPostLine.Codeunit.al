codeunit 12 "Gen. Jnl.-Post Line"
{
    procedure RunWithCheck(var SalesHeader: Record "Sales Header")
    begin
        Code(SalesHeader);
    end;

    procedure RunWithoutCheck(var SalesHeader: Record "Sales Header")
    begin
        Code(SalesHeader);
    end;

    procedure PostA() begin end;
    procedure PostB() begin end;
    procedure PostC() begin end;
    procedure PostD() begin end;
    procedure PostE() begin end;

    local procedure Code(var SalesHeader: Record "Sales Header")
    var
        Calc: Interface "Price Calculation";
    begin
        Calc.CalcPrice();
    end;
}
