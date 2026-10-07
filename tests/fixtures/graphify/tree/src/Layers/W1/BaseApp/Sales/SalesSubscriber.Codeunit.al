codeunit 7003 "Sales Subscriber"
{
    [EventSubscriber(ObjectType::Codeunit, Codeunit::"Sales-Post", 'OnAfterPostSalesDoc', '', false, false)]
    local procedure HandleAfterPost(var SalesHeader: Record "Sales Header")
    begin
    end;
}
