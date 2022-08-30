/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   strictEquality.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 22:12:08 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 22:12:44 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function testStrict(val) {
    if (val === 7) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testStrict(10));
  console.log(testStrict("10"));
  console.log(testStrict(7));