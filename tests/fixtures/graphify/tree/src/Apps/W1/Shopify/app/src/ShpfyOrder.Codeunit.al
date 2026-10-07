codeunit 30161 "Shpfy Import Order"
{
    procedure ImportOrder()
    var
        Post: Codeunit "Sales-Post";
        SalesHeader: Record "Sales Header";
    begin
        Post.PostSalesDoc(SalesHeader);
    end;
}
