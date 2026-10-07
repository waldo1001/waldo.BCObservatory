namespace Fixture.SubscriptionBilling;

page 8060 "Service Object"
{
    Caption = 'Subscription';
    PageType = Card;
    SourceTable = "Subscription Header";

    layout
    {
        area(Content)
        {
            group(General)
            {
                Caption = 'General';
                field("No."; Rec."No.")
                {
                    ToolTip = 'Specifies the number of the subscription.';
                    trigger OnAssistEdit()
                    begin
                    end;
                }
                field(Description; Description)
                {
                    Caption = 'Subscription Description';
                    Tooltip = 'Specifies a description of the subscription.';
                }
#if not CLEAN27
                field("Item No."; Rec."Item No.")
                {
                    ObsoleteState = Pending;
                    ObsoleteTag = '27.0';
                    ObsoleteReason = 'Replaced by Source No.';
                    ToolTip = 'Specifies the item.';
                }
#endif
                field(TotalAmount; Rec.Amount + Rec.Fee)
                {
                    Caption = 'Total';
                    Editable = false;
                }
            }
            group(Control10)
            {
                ShowCaption = false;
                grid(Hints)
                {
                    label(HintLabel)
                    {
                        Caption = 'Lines are billed monthly.';
                    }
                }
            }
            part(Lines; "Service Commitments")
            {
                Caption = 'Subscription Lines';
                SubPageLink = "Subscription Header No." = field("No.");
            }
        }
        area(factboxes)
        {
            systempart(Links; Links) { }
            usercontrol(Chart; "Business Chart") { }
        }
    }
    actions
    {
        area(Processing)
        {
            action(CreateInvoice)
            {
                Caption = 'Create Invoice';
                ToolTip = 'Creates the invoice for the subscription.';
                Image = Invoice;
                RunObject = Report 8012;
            }
            separator(Sep1) { }
            group(Navigate)
            {
                Caption = '&Navigate';
                action(OpenList)
                {
                    Caption = 'Subscriptions';
                    ToolTip = 'Opens the list of subscriptions.';
                    RunObject = Page "Service Objects";
                    RunPageLink = "No." = field("No.");
                }
#if not CLEAN28
                action(OldPost)
                {
                    ObsoleteState = Pending;
                    ObsoleteTag = '28.0';
                    ObsoleteReason = 'Use CreateInvoice.';
                    RunObject = codeunit Microsoft.Sales.Posting."Sales-Post";
                    trigger OnAction()
                    begin
                    end;
                }
#endif
            }
        }
        area(Promoted)
        {
            actionref(CreateInvoice_Promoted; CreateInvoice) { }
        }
    }
}

page 8059 "Service Objects"
{
    Caption = 'Subscriptions';
    PageType = List;
    SourceTable = "Subscription Header";
    CardPageId = "Service Object";

    layout
    {
        area(Content)
        {
            repeater(Group)
            {
                field("No."; Rec."No.") { ToolTip = 'Specifies the number.'; }
                field(Status; Format(Rec.Status)) { }
            }
            cuegroup(Activities)
            {
                Caption = 'Activities';
                field(Open; OpenCount) { }
                actions
                {
                    action(NewSubscription)
                    {
                        Caption = 'New Subscription';
                        RunObject = page "Service Object";
                        RunPageMode = Create;
                    }
                }
            }
        }
    }
}

pageextension 8061 "Sub. Customer Card" extends "Customer Card"
{
    layout
    {
        addafter(Name)
        {
            field("Subscription No."; Rec."Subscription No.")
            {
                ApplicationArea = All;
                ToolTip = 'Specifies the subscription of the customer.';
            }
        }
        addlast(Content)
        {
            group(Subscriptions)
            {
                Caption = 'Subscriptions';
                field("Open Subscriptions"; Rec."Open Subscriptions") { }
            }
        }
        modify("No.")
        {
            ToolTip = 'Specifies the customer number, also used on subscriptions.';
        }
    }
    actions
    {
        addfirst(Processing)
        {
            action(ShowSubscriptions)
            {
                Caption = 'Subscriptions';
                RunObject = Page "Service Objects";
            }
        }
        modify(Post)
        {
            Visible = false;
        }
    }
}
