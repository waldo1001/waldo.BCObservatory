#if not CLEAN28
table 1 T
{
    ObsoleteState = Pending;
    ObsoleteTag = '28.0';
    fields
    {
        field(1; A; Integer) { }
#if not CLEANSCHEMA26
        field(2; B; Integer)
        {
#if not CLEAN26
            ObsoleteState = Pending;
#else
            ObsoleteState = Removed;
#endif
            ObsoleteTag = '26.0';
        }
#endif
    }
#if not CLEAN27
    [Obsolete('x', '27.0')]
    procedure Old() begin end;
#endif
    procedure New() begin end;
}
#endif
