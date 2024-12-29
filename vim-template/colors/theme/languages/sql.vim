" SQL specific highlighting

" Keywords and commands
execute 'highlight sqlKeyword guifg=' . g:syntaxColors.keyword
execute 'highlight sqlStatement guifg=' . g:syntaxColors.keyword
execute 'highlight sqlSpecial guifg=' . g:syntaxColors.keyword

" Data manipulation
execute 'highlight sqlCrud guifg=' . g:syntaxColors.keyword
execute 'highlight sqlSelect guifg=' . g:syntaxColors.keyword
execute 'highlight sqlInsert guifg=' . g:syntaxColors.keyword
execute 'highlight sqlUpdate guifg=' . g:syntaxColors.keyword
execute 'highlight sqlDelete guifg=' . g:syntaxColors.keyword
execute 'highlight sqlMerge guifg=' . g:syntaxColors.keyword

" Data definition
execute 'highlight sqlCreate guifg=' . g:syntaxColors.keyword
execute 'highlight sqlDrop guifg=' . g:syntaxColors.keyword
execute 'highlight sqlAlter guifg=' . g:syntaxColors.keyword
execute 'highlight sqlTruncate guifg=' . g:syntaxColors.keyword

" Table operations
execute 'highlight sqlTable guifg=' . g:syntaxColors.type
execute 'highlight sqlView guifg=' . g:syntaxColors.type
execute 'highlight sqlIndex guifg=' . g:syntaxColors.type
execute 'highlight sqlTableName guifg=' . g:syntaxColors.class
execute 'highlight sqlViewName guifg=' . g:syntaxColors.class
execute 'highlight sqlIndexName guifg=' . g:syntaxColors.class

" Column definitions
execute 'highlight sqlColumn guifg=' . g:syntaxColors.property
execute 'highlight sqlColumnName guifg=' . g:syntaxColors.property
execute 'highlight sqlColumnType guifg=' . g:syntaxColors.type
execute 'highlight sqlConstraint guifg=' . g:syntaxColors.keyword
execute 'highlight sqlPrimaryKey guifg=' . g:syntaxColors.keyword
execute 'highlight sqlForeignKey guifg=' . g:syntaxColors.keyword
execute 'highlight sqlUnique guifg=' . g:syntaxColors.keyword
execute 'highlight sqlDefault guifg=' . g:syntaxColors.keyword
execute 'highlight sqlNull guifg=' . g:syntaxColors.constant
execute 'highlight sqlNotNull guifg=' . g:syntaxColors.keyword

" Data types
execute 'highlight sqlType guifg=' . g:syntaxColors.type
execute 'highlight sqlNumber guifg=' . g:syntaxColors.constant
execute 'highlight sqlString guifg=' . g:colors.FG1
execute 'highlight sqlBoolean guifg=' . g:syntaxColors.constant
execute 'highlight sqlDate guifg=' . g:syntaxColors.datetime
execute 'highlight sqlTimestamp guifg=' . g:syntaxColors.datetime
execute 'highlight sqlBinary guifg=' . g:syntaxColors.constant

" Functions and operators
execute 'highlight sqlFunction guifg=' . g:syntaxColors.function
execute 'highlight sqlAggregateFunction guifg=' . g:syntaxColors.function
execute 'highlight sqlWindowFunction guifg=' . g:syntaxColors.function
execute 'highlight sqlOperator guifg=' . g:syntaxColors.operator
execute 'highlight sqlComparisonOperator guifg=' . g:syntaxColors.operator
execute 'highlight sqlLogicalOperator guifg=' . g:syntaxColors.operator
execute 'highlight sqlArithmeticOperator guifg=' . g:syntaxColors.operator
execute 'highlight sqlBitwiseOperator guifg=' . g:syntaxColors.operator
execute 'highlight sqlStringOperator guifg=' . g:syntaxColors.operator
execute 'highlight sqlAssignmentOperator guifg=' . g:syntaxColors.operator

" Joins and relationships
execute 'highlight sqlJoin guifg=' . g:syntaxColors.keyword
execute 'highlight sqlInnerJoin guifg=' . g:syntaxColors.keyword
execute 'highlight sqlOuterJoin guifg=' . g:syntaxColors.keyword
execute 'highlight sqlLeftJoin guifg=' . g:syntaxColors.keyword
execute 'highlight sqlRightJoin guifg=' . g:syntaxColors.keyword
execute 'highlight sqlFullJoin guifg=' . g:syntaxColors.keyword
execute 'highlight sqlCrossJoin guifg=' . g:syntaxColors.keyword
execute 'highlight sqlOn guifg=' . g:syntaxColors.keyword
execute 'highlight sqlUsing guifg=' . g:syntaxColors.keyword

" Query clauses
execute 'highlight sqlFrom guifg=' . g:syntaxColors.keyword
execute 'highlight sqlWhere guifg=' . g:syntaxColors.keyword
execute 'highlight sqlGroupBy guifg=' . g:syntaxColors.keyword
execute 'highlight sqlHaving guifg=' . g:syntaxColors.keyword
execute 'highlight sqlOrderBy guifg=' . g:syntaxColors.keyword
execute 'highlight sqlLimit guifg=' . g:syntaxColors.keyword
execute 'highlight sqlOffset guifg=' . g:syntaxColors.keyword
execute 'highlight sqlUnion guifg=' . g:syntaxColors.keyword
execute 'highlight sqlIntersect guifg=' . g:syntaxColors.keyword
execute 'highlight sqlExcept guifg=' . g:syntaxColors.keyword

" Transaction control
execute 'highlight sqlTransaction guifg=' . g:syntaxColors.keyword
execute 'highlight sqlBegin guifg=' . g:syntaxColors.keyword
execute 'highlight sqlCommit guifg=' . g:syntaxColors.keyword
execute 'highlight sqlRollback guifg=' . g:syntaxColors.keyword
execute 'highlight sqlSavepoint guifg=' . g:syntaxColors.keyword

" Database objects
execute 'highlight sqlSchema guifg=' . g:syntaxColors.type
execute 'highlight sqlSequence guifg=' . g:syntaxColors.type
execute 'highlight sqlTrigger guifg=' . g:syntaxColors.type
execute 'highlight sqlProcedure guifg=' . g:syntaxColors.function
execute 'highlight sqlFunction guifg=' . g:syntaxColors.function
execute 'highlight sqlPackage guifg=' . g:syntaxColors.type
execute 'highlight sqlUser guifg=' . g:syntaxColors.type
execute 'highlight sqlRole guifg=' . g:syntaxColors.type
execute 'highlight sqlGrant guifg=' . g:syntaxColors.keyword
execute 'highlight sqlRevoke guifg=' . g:syntaxColors.keyword

" Clauses and conditions
execute 'highlight sqlCase guifg=' . g:syntaxColors.control
execute 'highlight sqlWhen guifg=' . g:syntaxColors.control
execute 'highlight sqlThen guifg=' . g:syntaxColors.control
execute 'highlight sqlElse guifg=' . g:syntaxColors.control
execute 'highlight sqlEnd guifg=' . g:syntaxColors.control

" Comments and documentation
execute 'highlight sqlComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight sqlLineComment guifg=' . g:syntaxColors.comment . ' gui=' . g:theme_get_style('Comment')
execute 'highlight sqlTodo guifg=' . g:syntaxColors.comment . ' gui=bold'

" Special syntax
execute 'highlight sqlSpecial guifg=' . g:syntaxColors.constant
execute 'highlight sqlParenthesis guifg=' . g:syntaxColors.punctuationBrace
execute 'highlight sqlComma guifg=' . g:syntaxColors.punctuationComma
execute 'highlight sqlQuote guifg=' . g:syntaxColors.punctuationQuote
execute 'highlight sqlWildcard guifg=' . g:syntaxColors.operator

" Error handling
execute 'highlight sqlError guifg=' . g:colors.ERROR
execute 'highlight sqlWarning guifg=' . g:colors.WARNING

" Transactions
execute 'highlight sqlTransaction guifg=' . g:syntaxColors.keyword
execute 'highlight sqlBegin guifg=' . g:syntaxColors.keyword
execute 'highlight sqlCommit guifg=' . g:syntaxColors.keyword
execute 'highlight sqlRollback guifg=' . g:syntaxColors.keyword
execute 'highlight sqlSavepoint guifg=' . g:syntaxColors.keyword

" Database specific
execute 'highlight sqlProcedure guifg=' . g:syntaxColors.function
execute 'highlight sqlTrigger guifg=' . g:syntaxColors.function
execute 'highlight sqlSequence guifg=' . g:syntaxColors.type
execute 'highlight sqlSchema guifg=' . g:syntaxColors.type
execute 'highlight sqlUser guifg=' . g:syntaxColors.type
execute 'highlight sqlRole guifg=' . g:syntaxColors.type
execute 'highlight sqlGrant guifg=' . g:syntaxColors.keyword
execute 'highlight sqlRevoke guifg=' . g:syntaxColors.keyword
