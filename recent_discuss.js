router.get(/^\/RecentDiscuss$/, async function recentDicsuss(req, res) {
	var flag = req.query['logtype'];
	if (!['normal_thread', 'old_thread', 'closed_thread', 'open_editrequest', 'accepted_editrequest', 'closed_editrequest'].includes(flag)) flag = 'normal_thread';
	var logtype = req.query['logtype'];
	if(!logtype) logtype = 'all';
	var content = '';
	if (ver('4.22.9')) {
		content += `
<style>
.f5zvpEli {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
}

.f5zvpEli li {
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
}

.f5zvpEli li:first-of-type {
    border-bottom-left-radius: 8px;
    border-left: 1px solid #e0e0e0;
    border-top-left-radius: 8px;
    padding: 0 0 0 .5rem;
}

.WM1fI54n {
    color: #373a3c;
    color: var(--text-color,#373a3c);
    display: inline-block;
    padding: .5rem .75rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    width: 100%;
}

.Zu7ghnVP {
    --navigation-item-underline-color: var(--brand-bright-color-1,#d5d5d5);
    color: #bcbcbc;
    color: var(--brand-color-1,#bcbcbc);
    font-weight: 600;
}

.WM1fI54n::after {
    background-color: transparent;
    background-color: var(--navigation-item-underline-color,transparent);
    bottom: 0;
    content: "";
    height: 4px;
    left: 1rem;
    pointer-events: none;
    position: absolute;
    right: 1rem;
}

.WM1fI54n:hover:not(.Zu7ghnVP) {
    --navigation-item-underline-color: var(--brand-bright-color-2,#e3e3e3);
}

.BgxsYBxf {
    margin-left: 0;
    margin-left: calc(var(--article-padding-x, 0)*-1);
    margin-right: 0;
    margin-right: calc(var(--article-padding-x, 0)*-1);
    position: relative;
}

.E19V7b3D {
    margin-bottom: 1rem;
    margin-top: 1rem;
}

._7tsGZmP7 {
    overflow-x: auto;
}

.nM6gcR96 {
    display: inline-block;
    margin: 0;
    margin: 0 var(--article-padding-x,0);
}

.byvQlvfu[data-v-08862673] {
    background: linear-gradient(90deg,transparent,#fff);
    background: linear-gradient(90deg,transparent,var(--article-background-color,#fff));
    bottom: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 8rem;
}


.Gog8FJ6X[data-v-08862673] {
    background: linear-gradient(90deg,#fff,transparent);
    background: linear-gradient(90deg,var(--article-background-color,#fff),transparent);
    left: 0;
    right: auto;
}

.-Yy3Y6nP[data-v-94a6588c] {
    display: flex;
    flex-direction: column;
}

.NfJT3FPE[data-v-94a6588c] {
    border-bottom: 1px solid #e0e0e0;
    display: grid;
}

.DjsdhWRC[data-v-94a6588c] {
    border-bottom-width: 2px;
    font-weight: 600;
}

@media screen and (max-width: 1023.98px) {
	.DjsdhWRC[data-v-94a6588c] {
		display: none;
	}
}

.NfJT3FPE[data-v-94a6588c] {
    grid-template-columns: 1fr 10rem 11rem 13rem;
}

@media screen and (max-width: 1399.98px) {
	.NfJT3FPE[data-v-94a6588c] {
		grid-template-columns: 1fr 8rem 9rem 12rem;
	}
}

@media screen and (max-width: 1023.98px) {
	.NfJT3FPE[data-v-94a6588c] {
		gap: .1rem;
		grid-template-columns: 1fr 1fr;
		padding: .5rem;
	}
}

.c0O2TLGQ[data-v-94a6588c] {
    padding: .5rem .75rem;
}

@media screen and (max-width: 1023.98px) {
	.c0O2TLGQ[data-v-94a6588c] {
		margin: 0 !important;
		padding: 0 !important;
	}

	.c0O2TLGQ[data-v-94a6588c]:first-child, .c0O2TLGQ[data-v-94a6588c]:nth-child(4), .c0O2TLGQ[data-v-94a6588c]:nth-child(5) {
		grid-column: 1/3;
	}

	.c0O2TLGQ[data-v-94a6588c]:first-child {
		font-size: 1.05rem;
		margin-bottom: .15rem !important;
	}

	.c0O2TLGQ[data-v-94a6588c]:nth-child(3) {
		text-align: right;
	}

	.c0O2TLGQ[data-v-94a6588c]:first-child, .c0O2TLGQ[data-v-94a6588c]:nth-child(4), .c0O2TLGQ[data-v-94a6588c]:nth-child(5) {
		grid-column: 1/3;
	}

	.c0O2TLGQ[data-v-94a6588c]:nth-child(4) {
		color: #888;
		font-size: .85rem;
		order: -1;
	}
}

.i80SVicp[data-v-94a6588c] {
    grid-column: 1/5;
}

.c0O2TLGQ + .i80SVicp[data-v-94a6588c] {
    color: #777;
    font-size: .9rem;
    margin: -.25rem 0 0;
    padding: 0 .75rem .5rem 1.5rem;
}

span[data-v-6cbb5b59] {
    color: gray;
}

.MY5yAwDg[data-v-94a6588c] {
    font-size: .8rem;
    margin: 0 0 0 .35rem;
    vertical-align: bottom;
}

span.a7gtkJvH[data-v-6cbb5b59] {
    color: red;
}

span.d\\+Pid0zt[data-v-6cbb5b59] {
    color: green;
}

._4HlR7Xk\\+[data-v-94a6588c] {
    display: flex;
    gap: .25rem;
}

.sx7-yPnI[data-v-94a6588c] {
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    color: #555;
    cursor: pointer;
    display: flex;
    font-size: .8rem;
    height: 1.3rem;
    justify-content: center;
    text-decoration: none;
    transition: background-color .1s ease-in,box-shadow .1s ease-in;
    width: 2rem;
}

.sx7-yPnI[data-v-94a6588c]:hover:not(.LHiFEOns) {
    background-color: #ededed;
}

.NfJT3FPE[data-v-94a6588c]:hover:not(.DjsdhWRC) {
    background-color: #fbfbfb;
}
			</style>

			<div class="BgxsYBxf E19V7b3D">
				<div class=_7tsGZmP7>
					<div class=nM6gcR96>
						<ul class=f5zvpEli>
							<li><a class="WM1fI54n${flag == 'normal_thread' ? ' Zu7ghnVP' : ''}" href="?logtype=normal_thread">열린 토론</a></li>
							<li><a class="WM1fI54n${flag == 'old_thread' ? ' Zu7ghnVP' : ''}" href="?logtype=old_thread">오래된 토론</a></li>
							<li><a class="WM1fI54n${flag == 'closed_thread' ? ' Zu7ghnVP' : ''}" href="?logtype=closed_thread">닫힌 토론</a></li>
							<li><a class="WM1fI54n${flag == 'open_editrequest' ? ' Zu7ghnVP' : ''}" href="?logtype=open_editrequest">열린 편집 요청</a></li>
							<li><a class="WM1fI54n${flag == 'accepted_editrequest' ? ' Zu7ghnVP' : ''}" href="?logtype=accepted_editrequest">승인된 편집 요청</a></li>
							<li><a class="WM1fI54n${flag == 'closed_editrequest' ? ' Zu7ghnVP' : ''}" href="?logtype=closed_editrequest">닫힌 편집 요청</a></li>
						</ul>
					</div>
				</div>
				
				<div data-v-08862673 class="byvQlvfu Gog8FJ6X" style="opacity: 0;"></div>
				<div data-v-08862673 class=byvQlvfu style="opacity: 0; display: none;"></div>
			</div>
			
		<table class="table table-hover">
			<colgroup>
				<col>
				<col style="width: 22%; min-width: 100px;">
			</colgroup>
			<div class=-Yy3Y6nP data-v-94a6588c>
				<div data-v-94a6588c="" class="NfJT3FPE DjsdhWRC">
					<div data-v-94a6588c="" class="c0O2TLGQ">제목</div> 
					<div data-v-94a6588c="" class="c0O2TLGQ"></div>
					<div data-v-94a6588c="" class="c0O2TLGQ"></div>
					<div data-v-94a6588c="" class="c0O2TLGQ">시간</div> 
				</div>
		`;
	}
	
	var trds;
	
	switch(logtype) {
		case 'normal_thread':
			trds = await curs.execute("select title, namespace, topic, time, tnum, slug from threads where status = 'normal' and not deleted = '1' order by cast(time as integer) desc limit 120");
		break; case 'old_thread':
			trds = await curs.execute("select title, namespace, topic, time, tnum, slug from threads where status = 'normal' and not deleted = '1' order by cast(time as integer) asc limit 120");
		break; case 'closed_thread':
			trds = await curs.execute("select title, namespace, topic, time, tnum, slug from threads where status = 'close' and not deleted = '1' order by cast(time as integer) desc limit 120");
		break; case 'open_editrequest':
			trds = await curs.execute("select id, slug, title, namespace, state, content, baserev, username, ismember, log, date, processor, processortype, processtime, lastupdate, reason, rev from edit_requests where state = 'open' and not deleted = '1' order by cast(date as integer) desc limit 120");
		break; case 'closed_editrequest':
			trds = await curs.execute("select id, slug, title, namespace, state, content, baserev, username, ismember, log, date, processor, processortype, processtime, lastupdate, reason, rev from edit_requests where state = 'closed' and not deleted = '1' order by cast(date as integer) desc limit 120");
		break; case 'accepted_editrequest':
			trds = await curs.execute("select id, slug, title, namespace, state, content, baserev, username, ismember, log, date, processor, processortype, processtime, lastupdate, reason, rev from edit_requests where state = 'accepted' and not deleted = '1' order by cast(date as integer) desc limit 120");
		break; default: {
			if(ver('4.18.1')) {
				trds = await curs.execute("select title, namespace, topic, time, tnum, slug from threads where status = 'normal' and not deleted = '1' order by cast(time as integer) desc limit 120");
			} else {
				var data1 = await curs.execute("select title, namespace, topic, time, tnum, slug from threads where status = 'normal' and not deleted = '1' order by cast(time as integer) desc limit 120");
				var data2 = await curs.execute("select id, slug, title, namespace, state, content, baserev, username, ismember, log, date, processor, processortype, processtime, lastupdate, reason, rev from edit_requests where state = 'open' and not deleted = '1' order by cast(date as integer) desc limit 120");
				trds = data1.concat(data2).sort((l, r) => ((r.date || r.time) - (l.date || l.time))).slice(0, 120);
			}
		}
	}
	
	for(var trd of trds) {
		const title = totitle(trd.title, trd.namespace) + '';
		
		content += `
			<tr>
				<td>
					${trd.state
						? `<a href="/edit_request/${ver('4.16.0') ? trd.slug : trd.id}">편집 요청 ${html.escape(ver('4.16.0') ? trd.slug : trd.id)}</a> (<a href="/discuss/${encodeURIComponent(title)}">${html.escape(title)}</a>)`
						: `<a href="/thread/${ver('4.16.0') ? trd.slug : trd.tnum}">${html.escape(trd.topic)}</a> (<a href="/discuss/${encodeURIComponent(title)}">${html.escape(title)}</a>)`
					}
				</td>
				
				<td>
					${generateTime(toDate(trd.time || trd.date), timeFormat)}
				</td>
			</tr>
		`;
	}
	content += `
			</tbody>
		</table>
	`;
	res.send(await render(req, '최근 토론', content, {}));
});
