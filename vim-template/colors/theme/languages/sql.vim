" SQL specific highlighting

" Keywords and commands
execute 'highlight sqlKeyword guifg=' . g:syntax_colors.keyword
execute 'highlight sqlStatement guifg=' . g:syntax_colors.keyword
execute 'highlight sqlSpecial guifg=' . g:syntax_colors.keyword

" Data manipulation
execute 'highlight sqlCrud guifg=' . g:syntax_colors.keyword
execute 'highlight sqlSelect guifg=' . g:syntax_colors.keyword
execute 'highlight sqlInsert guifg=' . g:syntax_colors.keyword
execute 'highlight sqlUpdate guifg=' . g:syntax_colors.keyword
execute 'highlight sqlDelete guifg=' . g:syntax_colors.keyword
execute 'highlight sqlMerge guifg=' . g:syntax_colors.keyword

" Data definition
execute 'highlight sqlCreate guifg=' . g:syntax_colors.keyword
execute 'highlight sqlDrop guifg=' . g:syntax_colors.keyword
execute 'highlight sqlAlter guifg=' . g:syntax_colors.keyword
execute 'highlight sqlTruncate guifg=' . g:syntax_colors.keyword

" Table operations
execute 'highlight sqlTable guifg=' . g:syntax_colors.type
execute 'highlight sqlView guifg=' . g:syntax_colors.type
execute 'highlight sqlIndex guifg=' . g:syntax_colors.type
execute 'highlight sqlTableName guifg=' . g:syntax_colors.class
execute 'highlight sqlViewName guifg=' . g:syntax_colors.class
execute 'highlight sqlIndexName guifg=' . g:syntax_colors.class

" Column definitions
execute 'highlight sqlColumn guifg=' . g:syntax_colors.property
execute 'highlight sqlColumnName guifg=' . g:syntax_colors.property
execute 'highlight sqlColumnType guifg=' . g:syntax_colors.type
execute 'highlight sqlConstraint guifg=' . g:syntax_colors.keyword
execute 'highlight sqlPrimaryKey guifg=' . g:syntax_colors.keyword
execute 'highlight sqlForeignKey guifg=' . g:syntax_colors.keyword
execute 'highlight sqlUnique guifg=' . g:syntax_colors.keyword
execute 'highlight sqlDefault guifg=' . g:syntax_colors.keyword
execute 'highlight sqlNull guifg=' . g:syntax_colors.constant
execute 'highlight sqlNotNull guifg=' . g:syntax_colors.keyword

" Data types
execute 'highlight sqlType guifg=' . g:syntax_colors.type
execute 'highlight sqlNumber guifg=' . g:syntax_colors.constant
execute 'highlight sqlString guifg=' . g:colors.fg1
execute 'highlight sqlBoolean guifg=' . g:syntax_colors.constant
execute 'highlight sqlDate guifg=' . g:syntax_colors.datetime
execute 'highlight sqlTimestamp guifg=' . g:syntax_colors.datetime
execute 'highlight sqlBinary guifg=' . g:syntax_colors.constant

" Functions and operators
execute 'highlight sqlFunction guifg=' . g:syntax_colors.function
execute 'highlight sqlAggregateFunction guifg=' . g:syntax_colors.function
execute 'highlight sqlWindowFunction guifg=' . g:syntax_colors.function
execute 'highlight sqlOperator guifg=' . g:syntax_colors.operator
execute 'highlight sqlComparisonOperator guifg=' . g:syntax_colors.operator
execute 'highlight sqlLogicalOperator guifg=' . g:syntax_colors.operator
execute 'highlight sqlArithmeticOperator guifg=' . g:syntax_colors.operator
execute 'highlight sqlBitwiseOperator guifg=' . g:syntax_colors.operator
execute 'highlight sqlStringOperator guifg=' . g:syntax_colors.operator
execute 'highlight sqlAssignmentOperator guifg=' . g:syntax_colors.operator

" Joins and relationships
execute 'highlight sqlJoin guifg=' . g:syntax_colors.keyword
execute 'highlight sqlInnerJoin guifg=' . g:syntax_colors.keyword
execute 'highlight sqlOuterJoin guifg=' . g:syntax_colors.keyword
execute 'highlight sqlLeftJoin guifg=' . g:syntax_colors.keyword
execute 'highlight sqlRightJoin guifg=' . g:syntax_colors.keyword
execute 'highlight sqlFullJoin guifg=' . g:syntax_colors.keyword
execute 'highlight sqlCrossJoin guifg=' . g:syntax_colors.keyword
execute 'highlight sqlOn guifg=' . g:syntax_colors.keyword
execute 'highlight sqlUsing guifg=' . g:syntax_colors.keyword

" Query clauses
execute 'highlight sqlFrom guifg=' . g:syntax_colors.keyword
execute 'highlight sqlWhere guifg=' . g:syntax_colors.keyword
execute 'highlight sqlGroupBy guifg=' . g:syntax_colors.keyword
execute 'highlight sqlHaving guifg=' . g:syntax_colors.keyword
execute 'highlight sqlOrderBy guifg=' . g:syntax_colors.keyword
execute 'highlight sqlLimit guifg=' . g:syntax_colors.keyword
execute 'highlight sqlOffset guifg=' . g:syntax_colors.keyword
execute 'highlight sqlUnion guifg=' . g:syntax_colors.keyword
execute 'highlight sqlIntersect guifg=' . g:syntax_colors.keyword
execute 'highlight sqlExcept guifg=' . g:syntax_colors.keyword

" Transaction control
execute 'highlight sqlTransaction guifg=' . g:syntax_colors.keyword
execute 'highlight sqlBegin guifg=' . g:syntax_colors.keyword
execute 'highlight sqlCommit guifg=' . g:syntax_colors.keyword
execute 'highlight sqlRollback guifg=' . g:syntax_colors.keyword
execute 'highlight sqlSavepoint guifg=' . g:syntax_colors.keyword

" Database objects
execute 'highlight sqlSchema guifg=' . g:syntax_colors.type
execute 'highlight sqlSequence guifg=' . g:syntax_colors.type
execute 'highlight sqlTrigger guifg=' . g:syntax_colors.type
execute 'highlight sqlProcedure guifg=' . g:syntax_colors.function
execute 'highlight sqlFunction guifg=' . g:syntax_colors.function
execute 'highlight sqlPackage guifg=' . g:syntax_colors.type
execute 'highlight sqlUser guifg=' . g:syntax_colors.type
execute 'highlight sqlRole guifg=' . g:syntax_colors.type
execute 'highlight sqlGrant guifg=' . g:syntax_colors.keyword
execute 'highlight sqlRevoke guifg=' . g:syntax_colors.keyword

" Clauses and conditions
execute 'highlight sqlCase guifg=' . g:syntax_colors.control
execute 'highlight sqlWhen guifg=' . g:syntax_colors.control
execute 'highlight sqlThen guifg=' . g:syntax_colors.control
execute 'highlight sqlElse guifg=' . g:syntax_colors.control
execute 'highlight sqlEnd guifg=' . g:syntax_colors.control

" Comments and documentation
execute 'highlight sqlComment guifg=' . g:syntax_colors.comment
execute 'highlight sqlLineComment guifg=' . g:syntax_colors.comment
execute 'highlight sqlTodo guifg=' . g:syntax_colors.comment . ' gui=bold'

" Special syntax
execute 'highlight sqlSpecial guifg=' . g:syntax_colors.constant
execute 'highlight sqlParenthesis guifg=' . g:syntax_colors.punctuation_brace
execute 'highlight sqlComma guifg=' . g:syntax_colors.punctuation_comma
execute 'highlight sqlQuote guifg=' . g:syntax_colors.punctuation_quote
execute 'highlight sqlWildcard guifg=' . g:syntax_colors.operator

" Error handling
execute 'highlight sqlError guifg=' . g:colors.error
execute 'highlight sqlWarning guifg=' . g:colors.warning

" Transactions
execute 'highlight sqlTransaction guifg=' . g:syntax_colors.keyword
execute 'highlight sqlBegin guifg=' . g:syntax_colors.keyword
execute 'highlight sqlCommit guifg=' . g:syntax_colors.keyword
execute 'highlight sqlRollback guifg=' . g:syntax_colors.keyword
execute 'highlight sqlSavepoint guifg=' . g:syntax_colors.keyword

" Database specific
execute 'highlight sqlProcedure guifg=' . g:syntax_colors.function
execute 'highlight sqlTrigger guifg=' . g:syntax_colors.function
execute 'highlight sqlSequence guifg=' . g:syntax_colors.type
execute 'highlight sqlSchema guifg=' . g:syntax_colors.type
execute 'highlight sqlUser guifg=' . g:syntax_colors.type
execute 'highlight sqlRole guifg=' . g:syntax_colors.type
execute 'highlight sqlGrant guifg=' . g:syntax_colors.keyword
execute 'highlight sqlRevoke guifg=' . g:syntax_colors.keyword
